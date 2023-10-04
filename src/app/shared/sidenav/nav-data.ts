import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
   {
      routerLink: 'dashboard',
      icon: '',
      label: 'dashboard'
   },
   {
      routerLink: 'coupens',
      icon: '',
      label: 'Coupens',
      items: [
         {
            routerLink: 'coupens/list',
            label: 'Nivel 1.1',
         },
         {
            routerLink: 'coupens/list2',
            label: 'Nivel 1.2',
         }
      ]
   },
]