import "./CheckoutProgress.css";
export default function CheckoutProgress({
  checkoutStage,
  setCheckoutStage,
  stages,
  stagesComplete,
}) {
  const onClickListner = (stage) => {
    setCheckoutStage(stage);
  };

  return (
    <div
      className="CheckoutProgressIndicator"
      key={`CheckoutProgressIndicator-${stagesComplete.length}`}
    >
      {stages.map((stage, key) => {
        const currentStage = checkoutStage === stage;
        const isStageCompleted = stagesComplete.includes(stage);
        const stageClassName =
          `ProgressStage${stage} ` +
          (currentStage ? "ActiveStage " : "") +
          (isStageCompleted ? "CompletedStage" : "");
        return (
          <div
            style={{
              cursor: isStageCompleted ? "pointer" : "auto",
            }}
            onClick={
              isStageCompleted
                ? () => {
                    onClickListner(stage);
                  }
                : undefined
            }
            key={`ProgressStage-${stage}`}
            className={stageClassName}
          >
            <div className="ProgressStageNumber">{key + 1}</div>
            <span className="StageName">{stage}</span>
          </div>
        );
      })}
    </div>
  );
}
