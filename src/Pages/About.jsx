import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Vision Workspaces</title>
        <meta
          name="description"
          content="Learn more about Vision Workspaces in Nagpur."
        />
      </Helmet>

      <h1>About Us</h1>
    </>
  );
}