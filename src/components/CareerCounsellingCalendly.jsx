import { InlineWidget, PopupButton } from "react-calendly";

function CareerCounsellingCalendly({ careercounselling, type }) {
  return (
    careercounselling &&
    (type == "inline" ? (
      <InlineWidget
        styles={{ height: "720px" }}
        LoadingSpinner={() => {
          return (
            <div className="d-flex justify-content-center align-item-center">
              Loading....
            </div>
          );
        }}
        url="https://calendly.com/mehnaz-tabassum/career"
      />
    ) : (
      <div className="text-center">
        <PopupButton
          className="btn-primary w-75"
          rootElement={document.getElementById("contactus")}
          text="Schedule and pay for your career counselling session"
          LoadingSpinner={() => {
            return (
              <div className="d-flex justify-content-center align-item-center">
                Loading....
              </div>
            );
          }}
          url="https://calendly.com/mehnaz-tabassum/career"
        />
      </div>
    ))
  );
}

export default CareerCounsellingCalendly;
