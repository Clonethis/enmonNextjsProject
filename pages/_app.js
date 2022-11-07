import { Provider } from "react-redux";
import { store } from "../context/store";
import "../styles/globals.css";

import "../styles/forms.css";
import "../styles/links.css";
// TODO1: Create a production-ready React application that will display a list of meters after successful login.
// TODO2: Fetch data from
// TODO2:
// TODO2:
// TODO2:

// User is able to log in by entering an email and a password. Credentials should not be hard coded.
// TODO1.1: After successful login user can see a list of Inventory Meters in a form of a table.
// TODO1.1.1: User is able to log out from the application

// TODO1.2: Display at least 5 Meter attributes in the table. Pick appropriate formatter.
// TODO1.3: Table supports pagination and sorting (check Strapi docs to find out how to paginate and sort).

// TODO2: Implement either REST PUT endpoint or GraphlQL mutation for InventoryMeter entity so that the user is able to edit parameters displayed in the table.

// - The API is located at https://tools.dev.enmon.tech/api

// - The backend service is built on Strapi V3 headless CMS

// - You can find more about Strapi V3
//   here https://docs-v3.strapi.io/developer-docs/latest/getting-started/introduction.html

// homework@enmon.tech

// password: GHrSyhF5m6M8G5PT
// app with redux state store Provider
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
