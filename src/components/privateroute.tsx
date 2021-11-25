// import * as React from "react";
// import { useContext } from "react";
// import { Route, Navigate } from "react-router-dom";
// import { AuthContext } from "../context/authContext";

// const PrivateRoute = ({
//   component: RouteComponent,
//   ...rest
// }: {
//   component: any;
// }) => {
//   const { currentUser }: any = useContext(AuthContext);
//   return (
//     <Route
//       {...rest}
//       render ={(routeProps: any) =>
//         !!currentUser ? (
//           <RouteComponent {...routeProps} />
//         ) : (
//           <Navigate to={"/login"} />
//         )
//       }
//     />
//   );
// };

// export default PrivateRoute;
export {};
