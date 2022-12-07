import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Section from 'components/Section/Section';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';


export default function ContactsPage() {
    return (
        <>
            <Section title="Phonebook">
                <ContactForm />
            </Section>
            <Section title="Contacts">
                <Filter />
                <ContactList />
            </Section>
            <NotificationContainer />
        </>
    );
}