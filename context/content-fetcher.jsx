import axios from "axios";

import "../constants/user.jsx";
// TODO 2.2: Parse data from GET request
// TODO 2.3: Show them on the frontend
// TODO 2.4: expiration of JWT <- check and make renew jwt

export async function LoginFetch(props) {
  const email = "homework@enmon.tech";
  const password = "GHrSyhF5m6M8G5PT";
  try {
    console.log(props);
  } catch (e) {
    console.log("There are no props");
  }

  //   console.log("email:", email);
  return await axios
    .post("https://tools.dev.enmon.tech/api/auth/local", {
      identifier: email,
      password: password,
    })
    .then((e) => {
      return e.data.jwt;
    });
}

function printJwt(e) {
  console.log("jwt", e.data.jwt);
  return e.data.jwt;
}

function gotJWT(jwt) {
  console.log("yeay, i got jwt", jwt);
}

// Done  2: Making correct get request
export async function FetchMeters() {
  const apiLocation = "https://tools.dev.enmon.tech/api/inventory-meters/";
  const jwt = await LoginFetch().then((e) => {
    console.log("What did I get after login Fetch", e);
    return FetchReallyMeters(e).data;
  });
}

async function FetchReallyMeters(jwt) {
  console.log("FetchReallyMeters with jwt: ", jwt);
  try {
    console.log("Trying try; jwt: ", jwt);
    if (jwt) {
      const getRequest = await axios
        .get("https://tools.dev.enmon.tech/api/inventory-meters", {
          headers: { Authorization: "Bearer " + jwt },
        })
        .then((e) => console.log("Get Request", e));
    }
  } catch (error) {
    console.log(error.message);
  }
}

// export async function DataAndStyleTogether() {
//   const data = await FetchMeters().then((data) => {
//     console.log("FetchMeters, here is data:", data);
//     try {
//       return DisplayMeters(data);
//     } catch (e) {
//       console.log(e);
//     }
//   });
// }

// export function DisplayMeters(data) {
//   const RenderedArray = data.map((data) => {
//     <div className="meter" key={data.id}>
//       <div className="owner">{data.owner}</div>
//       <div className="tenant">{data.tenant}</div>
//     </div>;
//   });
//   return (
//     <div className="meter-grid">
//       <h1>neic</h1>
//       <RenderedArray />
//     </div>
//   );
// }
