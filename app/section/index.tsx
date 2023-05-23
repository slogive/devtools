'use client';

import { ChangeEvent, Fragment, useEffect, useState } from 'react';
import styles from '../home.module.scss';
import { CODE } from './routes';
import { ROLES } from './roles';
import { PERMISSIONS } from './permissions';

export default function Home(): JSX.Element {
  const [code, setCode] = useState({
    input: CODE,
    output: '',
  });

  useEffect(() => {
    // console.log(code.input.slice(0, 4));
    console.log(
      code.input.slice(0, 4).map((values) => {
        return { url: values.url, permissions: values.permissions };
      })
    );
  }, [code]);

  return (
    <section className={styles.content}>
      <div className={styles.table}>
        <Fragment>
          <section className={styles.columnHeader}>
            <span>Ready</span>
          </section>

          <section className={styles.columnHeader}>
            <span>Route</span>
          </section>

          <section className={styles.columnHeader}>
            <span>Roles</span>
          </section>
        </Fragment>

        {code.input.map((row, rowIdx) => {
          return (
            <Fragment key={rowIdx}>
              <section className={`${styles.columnElement} ${styles.columnReady}`}>
                <span>{row.roles.length < 1 ? '❌' : '✅'}</span>
              </section>

              <section className={`${styles.columnElement} ${styles.columnRoute}`}>
                <pre>
                  {row.url.split('-')[0].padEnd(8)}
                  {row.url.slice(row.url.indexOf('-') + 1)}
                </pre>
              </section>

              <section
                className={`${styles.columnElement} ${styles.columnRoles}`}
                style={{ gridTemplateColumns: `repeat(${ROLES.length}, 1fr)` }}
              >
                {ROLES.map((role, roleIdx) => {
                  const INCLUDED = row.roles.includes(role.value);

                  return (
                    <div key={roleIdx} className={styles.columnRolesItems}>
                      <div
                        className={styles.columnRole}
                        style={{ background: INCLUDED ? 'rgba(0, 115, 255, 1)' : 'rgba(204, 204, 204, 1)' }}
                      >
                        <label htmlFor={`${role}${roleIdx}${rowIdx}`}>{role.label}</label>

                        <input
                          key={`${role}${roleIdx}${rowIdx}`}
                          type='checkbox'
                          name={role.value}
                          id={`${role}${roleIdx}${rowIdx}`}
                          checked={INCLUDED}
                          onChange={(evt) => {
                            const checked = evt.target.checked;
                            const roleName = evt.target.name;
                            const updatedRoles = checked
                              ? [...row.roles, roleName]
                              : row.roles.filter((role) => role !== roleName);

                            const updatedInput = [...code.input];
                            updatedInput[rowIdx] = {
                              ...row,
                              roles: updatedRoles,
                            };

                            setCode({
                              ...code,
                              input: updatedInput,
                            });
                          }}
                        />
                      </div>

                      {INCLUDED && (
                        <div className={styles.columnRolePermissions}>
                          {PERMISSIONS.map((permission, permissionIdx) => {
                            const INCLUDED_PERMISSIONS = row.permissions[role.value]?.includes(permission.value) || false;

                            return (
                              <div
                                key={permissionIdx}
                                style={{ background: INCLUDED_PERMISSIONS ? 'rgba(0, 115, 255, 1)' : 'rgba(204, 204, 204, 1)' }}
                                className={styles.columnRolePermission}
                              >
                                <label htmlFor={`${permission.value}${roleIdx}${permissionIdx}`}>{permission.label}</label>
                                <input
                                  type='checkbox'
                                  name={permission.value}
                                  id={`${permission.value}${roleIdx}${permissionIdx}`}
                                  checked={INCLUDED_PERMISSIONS}
                                  onChange={(evt) => {
                                    // const checked = evt.target.checked;
                                    // const permissionName = evt.target.name;
                                    // const updatedPermissions = checked
                                    //   ? {
                                    //       ...row.permissions,
                                    //       [role.value]: [...(row.permissions[role.value] || []), permissionName],
                                    //     }
                                    //   : {
                                    //       [permissionName]: row.permissions[permissionName]?.filter(
                                    //         (permission) => permission !== permissionName
                                    //       ),
                                    //     };

                                    // const updatedInput = [...code.input];
                                    // updatedInput[rowIdx] = {
                                    //   ...updatedInput[rowIdx],
                                    //   permissions: updatedPermissions,
                                    // };

                                    // setCode({
                                    //   ...code,
                                    //   input: updatedInput,
                                    // });

                                    const checked = evt.target.checked;
                                    const permissionName = evt.target.name;
                                    const { permissions } = row;
                                    const updatedPermissions = { ...permissions };

                                    if (checked) {
                                      updatedPermissions[role.value] = [...(permissions[role.value] || []), permissionName];
                                    } else {
                                      const permissionArray = updatedPermissions[role.value];
                                      if (permissionArray) {
                                        updatedPermissions[role.value] = permissionArray.filter(
                                          (permission) => permission !== permissionName
                                        );
                                      }
                                    }

                                    const updatedInput = [...code.input];
                                    updatedInput[rowIdx] = {
                                      ...updatedInput[rowIdx],
                                      permissions: updatedPermissions,
                                    };

                                    setCode({
                                      ...code,
                                      input: updatedInput,
                                    });
                                  }}
                                />
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </section>
            </Fragment>
          );
        })}
      </div>

      <h2>Result</h2>

      <textarea
        name=''
        id=''
        cols={30}
        rows={30}
        value={JSON.stringify(code.input, null, 2)}
        className={styles.result}
        readOnly
      />
    </section>
  );
}
