import Home from '@/views/Home';
import Login from '@/views/Login';
import NotFound from "@/views/NotFound";
import ContactsList from "@/views/Contacts/ContactsList";
import ContactView from "@/views/Contacts/ContactView";
import ContactCreate from "@/views/Contacts/ContactCreate";
import ContactEdit from "@/views/Contacts/ContactEdit";

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {requiresAuth: true}
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsList,
    meta: {requiresAuth: true}
  },
  {
    path: "/contacts/create",
    name: "contacts_create",
    component: ContactCreate,
    meta: {requiresAuth: true}
  },
  {
    path: "/contacts/:id",
    name: "contacts_view",
    component: ContactView,
    meta: {requiresAuth: true}
  },
  {
    path: "/contacts/:id/edit",
    name: "contacts_edit",
    component: ContactEdit,
    meta: {requiresAuth: true}
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {requiresAuth: false}
  },
  {
    path: "*",
    name: "not_found",
    component: NotFound,
  }
];
