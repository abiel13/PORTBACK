import { Stack } from "@mui/material";
import React from "react";

const PortBackInstallationGuide = () => {
  return (
    <Stack spacing={4} className="text-gray-300 w-[100%] md:w-[75%]">
      <h2 className="tracking-widest text-white md:text-2xl font-bold">
        Installation Guide
      </h2>

      <Stack spacing={3}>
        <li>
          <strong className="tracking-widest font-medium">
            Sign Up on PortBack:
          </strong>
          <p>
            Visit the PortBack website at{" "}
            <a href="/" target="_blank" rel="noopener noreferrer">
              https://www.portback.com
            </a>
            . Sign up for an account to create your personal portfolio.
          </p>
        </li>

        <li>
          <strong className="tracking-widest font-medium">
            Access Your User-Specific URL:
          </strong>
          <p>
            After signing in, navigate to your account settings or dashboard.
            Look for the section that provides your user-specific URL. It might
            be labeled as "Portfolio URL" or something similar. Copy the
            provided URL.
          </p>
        </li>

        <li>
          <strong className="tracking-widest font-medium">
            Integrate the User-Specific URL in Your React Application:
          </strong>
          <p>
            Open your React application codebase. In the component where you
            want to fetch data from PortBack, use the copied user-specific URL
            in a fetch or axios request.
          </p>
          <div className="max-w-[100%]">
            <pre style={{textWrap:'wrap'}} className="bg-blue-900 p-3 my-3">                
            {`
const portBackURL = 'paste-your-copied-url-here'; // Paste the URL you copied from PortBack
fetch(\`\${portBackURL}/api/data/
\`)
  .then(response => response.json())
  .then(data => {
    // Handle the data as needed in your application
    console.log('PortBack Data:', data);
  })
  .catch(error => {
    console.error('Error fetching PortBack data:', error);
  });`}
            </pre>
          </div>
        </li>

        <li>
          <strong>Use PortBack Data:</strong>
          <p>
            The fetched data can now be used in your React application as
            required.
          </p>
        </li>
      </Stack>
    </Stack>
  );
};

export default PortBackInstallationGuide;
