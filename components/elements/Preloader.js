export default function Preloader() {
  return (
    <>
      <div
        className="loader-wrap"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
       <img src="/assets/images/kprmill-images/loading-gif.gif" alt="preloader" />
      </div>
    </>
  );
}
