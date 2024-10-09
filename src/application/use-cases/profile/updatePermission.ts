/* eslint-disable @typescript-eslint/ban-ts-comment */
type Keys = 'Editar nome' | 'Editar email' | 'Editar senha';

const allPermissions: Keys[] = ['Editar nome', 'Editar email', 'Editar senha'];

export function updatePermission(permissions: string[]) {
    // @ts-ignore
    const permissionsObject: Record<Keys, boolean> = {};

    allPermissions.map((per) => {
        permissionsObject[per] = permissions.includes(per);
    });

    return permissionsObject;
}