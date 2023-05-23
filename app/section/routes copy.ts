type TRoles = 'public' | 'admin' | 'counselor' | 'mentor' | 'searcher' | 'employer';

export const CODE: Array<{
  url: string;
  roles: Array<TRoles | string>;
  permissions: Partial<Record<TRoles | string, Array<'read' | 'write' | 'delete' | 'owner' | string>>>;
  params: { model: string };
}> = [
  {
    url: 'POST-/v1/user/list',
    roles: ['admin'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/user/',
    roles: ['admin'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/user/',
    roles: ['admin'],
    permissions: {
      admin: ['read', 'delete', 'write'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/user/searcher-list',
    roles: ['admin', 'counselor'],
    permissions: {
      admin: ['read', 'delete', 'write'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/user/company-list',
    roles: ['admin', 'counselor'],
    permissions: {
      admin: ['read', 'delete', 'write'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/auth/login',
    roles: ['public'],
    permissions: {
      public: ['read', 'write'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/auth/signin',
    roles: ['public'],
    permissions: {
      public: ['read', 'write'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/auth/signup-searcher',
    roles: ['public'],
    permissions: {
      public: ['read', 'write'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/auth/signup-employer',
    roles: ['public'],
    permissions: {
      public: ['read', 'write'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/auth/verify-user',
    roles: ['public'],
    permissions: {
      public: ['read', 'write'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/auth/forgot-password',
    roles: ['public'],
    permissions: {
      public: ['read', 'write'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/auth/verify-password',
    roles: ['public'],
    permissions: {
      public: ['read', 'write'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/auth/reset-password',
    roles: ['public'],
    permissions: {
      public: ['write', 'read'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/request/public',
    roles: ['public'],
    permissions: {
      public: ['read', 'write'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/request/private',
    roles: ['employer', 'searcher'],
    permissions: {},
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/request/pending',
    roles: ['admin', 'counselor'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/request/list',
    roles: ['admin', 'counselor'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/request/details',
    roles: ['admin', 'counselor'],
    permissions: {
      admin: ['read', 'delete', 'write'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/request/review',
    roles: ['admin', 'counselor'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/activity/',
    roles: ['admin', 'counselor', 'mentor'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/activity/complete',
    roles: ['searcher'],
    permissions: {},
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/activity/details',
    roles: ['admin', 'counselor', 'mentor', 'searcher'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/activity/finish',
    roles: ['admin', 'counselor', 'mentor'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/activity/init',
    roles: ['searcher'],
    permissions: {},
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/activity/mentoring',
    roles: ['admin', 'counselor', 'mentor'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/activity/test',
    roles: ['admin', 'counselor'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/advisory/approve',
    roles: ['admin', 'counselor'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/advisory/reject',
    roles: ['admin', 'counselor'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/advisory/list',
    roles: ['admin', 'counselor', 'searcher'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/advisory/cancel',
    roles: ['admin', 'counselor', 'searcher', 'employer'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/advisory/link',
    roles: ['admin', 'counselor'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/announcement/board',
    roles: ['admin', 'mentor', 'searcher'],
    permissions: {
      admin: ['write', 'read', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/announcement/list',
    roles: ['admin', 'counselor', 'employer'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/announcement/approve',
    roles: ['admin', 'counselor'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/announcement/details',
    roles: ['admin', 'counselor', 'employer'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/announcement/',
    roles: ['employer'],
    permissions: {},
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/announcement/save',
    roles: ['employer'],
    permissions: {},
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/announcement/reject',
    roles: ['counselor', 'admin'],
    permissions: {
      admin: ['write', 'read', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/announcement/publish',
    roles: ['employer'],
    permissions: {},
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/announcement/send-review',
    roles: ['employer'],
    permissions: {},
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/announcement/board-details',
    roles: ['admin', 'mentor', 'searcher'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/availability/',
    roles: ['admin', 'counselor', 'mentor'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/availability/',
    roles: ['admin', 'counselor', 'mentor'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/availability/',
    roles: ['admin', 'counselor', 'mentor'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/cap/',
    roles: ['admin'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/cap/',
    roles: ['admin'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'DELETE-/v1/cap/',
    roles: ['admin'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/cap/list',
    roles: ['admin', 'counselor', 'mentor', 'searcher', 'employer'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/cap/details',
    roles: ['admin', 'counselor', 'mentor', 'searcher', 'employer'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/comment/',
    roles: ['admin', 'counselor', 'mentor', 'searcher'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/comment/list',
    roles: ['admin', 'counselor', 'mentor', 'searcher'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/company-registered/list',
    roles: ['admin', 'counselor'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/company-registered/reject',
    roles: ['admin', 'counselor'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/company-registered/approve',
    roles: ['admin', 'counselor'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/company-registered/details',
    roles: ['admin', 'counselor', 'employer'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/company/list',
    roles: ['admin', 'counselor'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/company/details',
    roles: ['admin', 'counselor', 'employer'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/company/approve',
    roles: ['admin', 'counselor'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/company/reject',
    roles: ['admin', 'counselor'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/company/general-info',
    roles: ['admin', 'counselor', 'employer'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/company/contact-info',
    roles: ['admin', 'counselor', 'employer'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/company/human-resources',
    roles: ['admin', 'counselor', 'employer'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/company/documents',
    roles: ['employer'],
    permissions: {},
    params: {
      model: '',
    },
  },
  {
    url: 'DELETE-/v1/company/document',
    roles: ['employer'],
    permissions: {},
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/company/info-review',
    roles: ['employer'],
    permissions: {},
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/course/',
    roles: ['admin'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/course/',
    roles: ['admin'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'DELETE-/v1/course/',
    roles: ['admin'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/course/enroll',
    roles: ['employer', 'searcher'],
    permissions: {},
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/course/enroll-update',
    roles: ['admin', 'counselor'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/course/list',
    roles: ['admin', 'counselor', 'mentor', 'searcher', 'employer'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/course/enroll-list',
    roles: ['admin', 'counselor'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/course/details',
    roles: ['admin', 'counselor', 'mentor', 'searcher', 'employer'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'DELETE-/v1/cvs/academic-info',
    roles: ['admin', 'searcher'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/cvs/academic-info',
    roles: ['admin', 'searcher'],
    permissions: {
      admin: ['write', 'read', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/cvs/academic-info',
    roles: ['admin', 'searcher'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/cvs/language-info',
    roles: ['admin', 'searcher'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/cvs/language-info',
    roles: ['admin', 'searcher'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'DELETE-/v1/cvs/language-info',
    roles: ['admin', 'searcher'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'DELETE-/v1/cvs/laboral-info',
    roles: ['admin', 'searcher'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/cvs/laboral-info',
    roles: ['admin', 'searcher'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/cvs/laboral-info',
    roles: ['admin', 'searcher'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/cvs/recognition-info',
    roles: ['admin', 'searcher'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/cvs/recognition-info',
    roles: ['admin', 'searcher'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'DELETE-/v1/cvs/recognition-info',
    roles: ['admin', 'searcher'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/cvs/complementary-study',
    roles: ['admin', 'searcher'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/cvs/complementary-study',
    roles: ['admin', 'searcher'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'DELETE-/v1/cvs/complementary-study',
    roles: ['admin', 'searcher'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/cvs/list',
    roles: ['admin', 'counselor', 'mentor'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/cvs/details',
    roles: ['admin', 'counselor', 'mentor', 'searcher'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/cvs/personal-info',
    roles: ['admin', 'counselor', 'searcher'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/cvs/private-info',
    roles: ['admin', 'searcher'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/cvs/upload-cv',
    roles: ['searcher'],
    permissions: {},
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/cvs/upload-video',
    roles: ['searcher'],
    permissions: {},
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/diagnostic/',
    roles: ['admin', 'counselor'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/diagnostic/',
    roles: ['admin', 'counselor'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/diagnostic/details',
    roles: ['admin', 'counselor', 'mentor', 'searcher'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/diagnostic/list',
    roles: ['admin', 'counselor', 'mentor'],
    permissions: {
      admin: ['read', 'delete', 'write'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/mentoring/approve',
    roles: ['admin', 'mentor'],
    permissions: {
      admin: ['read', 'delete', 'write'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/mentoring/reject',
    roles: ['admin', 'mentor'],
    permissions: {
      admin: ['read', 'delete', 'write'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/mentoring/list',
    roles: ['admin', 'counselor', 'mentor', 'searcher'],
    permissions: {
      admin: ['delete', 'write', 'read'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/mentoring/cancel',
    roles: ['admin', 'mentor'],
    permissions: {
      admin: ['delete', 'read', 'write'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/mentoring/link',
    roles: ['admin', 'mentor'],
    permissions: {
      admin: ['delete', 'read', 'write'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/plan/',
    roles: ['admin', 'counselor'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/plan/details',
    roles: ['admin', 'counselor', 'mentor', 'searcher'],
    permissions: {
      admin: ['delete', 'write', 'read'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/plan/list',
    roles: ['admin', 'counselor', 'mentor'],
    permissions: {
      admin: ['read', 'delete', 'write'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/postulation/searcher',
    roles: ['admin', 'counselor'],
    permissions: {
      admin: ['read', 'delete', 'write'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/postulation/searcher',
    roles: ['admin', 'counselor'],
    permissions: {
      admin: ['delete', 'read', 'write'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/postulation/',
    roles: ['admin', 'counselor', 'employer'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/postulation/vacancy',
    roles: ['searcher'],
    permissions: {},
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/postulation/announcement',
    roles: ['searcher'],
    permissions: {},
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/postulation/list',
    roles: ['searcher'],
    permissions: {},
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/request/public',
    roles: ['public'],
    permissions: {
      public: ['read', 'write'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/request/private',
    roles: ['searcher', 'employer'],
    permissions: {},
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/request/pending',
    roles: ['counselor', 'admin'],
    permissions: {
      admin: ['delete', 'write', 'read'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/request/list',
    roles: ['admin', 'counselor'],
    permissions: {
      admin: ['delete', 'write', 'read'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/request/details',
    roles: ['admin', 'counselor'],
    permissions: {
      admin: ['delete', 'write', 'read'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/request/review',
    roles: ['admin', 'counselor'],
    permissions: {
      admin: ['delete', 'write', 'read'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/searcher/search',
    roles: ['admin', 'counselor'],
    permissions: {
      admin: ['delete', 'write', 'read'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/vacancy/board',
    roles: ['admin', 'mentor', 'searcher'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/vacancy/list',
    roles: ['admin', 'counselor', 'employer'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/vacancy/approve',
    roles: ['admin', 'counselor'],
    permissions: {
      admin: ['delete', 'write', 'read'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/vacancy/details',
    roles: ['employer'],
    permissions: {},
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/vacancy/',
    roles: ['employer'],
    permissions: {},
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/vacancy/save',
    roles: ['employer'],
    permissions: {},
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/vacancy/reject',
    roles: ['counselor', 'admin'],
    permissions: {
      admin: ['write', 'read', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/vacancy/publish',
    roles: ['employer'],
    permissions: {},
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/vacancy/send-review',
    roles: ['employer'],
    permissions: {},
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/vacancy/board-details',
    roles: ['admin', 'mentor', 'searcher'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/workshop/',
    roles: ['admin'],
    permissions: {
      admin: ['delete', 'write', 'read'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/workshop/',
    roles: ['admin'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'DELETE-/v1/workshop/',
    roles: ['admin'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/workshop/enroll',
    roles: ['searcher', 'employer'],
    permissions: {
      searcher: ['read', 'write', 'delete'],
      employer: ['delete', 'write', 'read'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'PATCH-/v1/workshop/enroll-update',
    roles: ['admin', 'counselor'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/workshop/list',
    roles: ['admin', 'counselor', 'mentor', 'searcher', 'employer'],
    permissions: {
      admin: ['read', 'write', 'delete'],
      counselor: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/workshop/enroll-list',
    roles: ['admin', 'counselor'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
  {
    url: 'POST-/v1/workshop/details',
    roles: ['admin', 'counselor', 'mentor', 'searcher', 'employer'],
    permissions: {
      admin: ['read', 'write', 'delete'],
    },
    params: {
      model: '',
    },
  },
];
