"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div className="flex flex-col justify-items-center space-y-5 m-5 p-5 ">
          <div role="alert" class="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>
              Oh no! Something went wrong on that page! Couldn&apos;t find your
              stickies!
            </span>
          </div>

          <p>{error.message}</p>
          <button class="btn btn-success" onClick={() => reset()}>
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
