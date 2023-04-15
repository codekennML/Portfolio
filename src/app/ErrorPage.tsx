import { useRouteError } from "react-router-dom";

export default function ErrorPage() {



  return (
    <div className="h-screen w-screen grid place-content-center gap-y-4">
      <h1 className="text-center">404</h1>
      <p>Oops! Sorry, an unexpected error has occurred.</p>
     
    </div>
  );
}