import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Section from './Section/Section';

import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { Layout } from './Layout/Layout';

const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const TasksPage = lazy(() => import('../pages/Contacts'));

export function App() {
  // const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
}

//   return (
//     <Layout>
//       <Section title="Phonebook">
//         <ContactForm />
//       </Section>
//       <Section title="Contacts">
//         <Filter />
//         <ContactList />
//       </Section>
//       <NotificationContainer />
//     </Layout>
//   );
// }
