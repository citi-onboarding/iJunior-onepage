import axios from "axios";
import { useState, useEffect } from "react";

import "./RequirementsAnalysis.css";

const RequirementsAnalysis = () => {
  const [requirementsAnalysisData, setRequirementsAnalysisData] =
    useState(null);

  const loadData = async () => {
    const response = await axios.get(
      "https://ijuniorloop.herokuapp.com/api/analysis"
    );

    const data = {
      firstText: {
        firstTopic: response.data[0].firstText.firstTopic,
        secondTopic: response.data[0].firstText.secondTopic,
        thirdTopic: response.data[0].firstText.thirdTopic,
      },
      secondText: {
        firstTopic: response.data[0].secondText.firstTopic,
        secondTopic: response.data[0].secondText.secondTopic,
        thirdTopic: response.data[0].secondText.thirdTopic,
      },
      firstImage: response.data[0].firstImage[0].url,
      secondImage: response.data[0].secondImage[0].url,
    };

    setRequirementsAnalysisData(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div id="AnaliseDeRequisitos">
      <div className="Analysis">
        {requirementsAnalysisData && (
          <>
            <div className="FirstTopic">
              <div className="Text">
                <h2 className="AnalysisTitle">Análise de Requisitos</h2>
                <ul>
                  <li className="Topic">
                    {requirementsAnalysisData.firstText.firstTopic}
                  </li>
                  <li className="Topic">
                    {requirementsAnalysisData.firstText.secondTopic}
                  </li>
                  <li className="Topic">
                    {requirementsAnalysisData.firstText.thirdTopic}
                  </li>
                </ul>
              </div>
              <div className="FirstImage">
                <img
                  src={requirementsAnalysisData.firstImage}
                  alt="Análise de requisitos"
                  height={180}
                  width={330}
                />
              </div>
            </div>
            <div className="SecondTopic">
              <div className="Text">
                <h4 className="AnalysisSubtitle">
                  O que você recebe após a Análise de Requisitos?
                </h4>
                <ul>
                  <li className="Topic">
                    {requirementsAnalysisData.secondText.firstTopic}
                  </li>
                  <li className="Topic">
                    {requirementsAnalysisData.secondText.secondTopic}
                  </li>
                  <li className="Topic">
                    {requirementsAnalysisData.secondText.thirdTopic}
                  </li>
                </ul>
              </div>
              <div className="SecondImage">
                <img
                  src={requirementsAnalysisData.secondImage}
                  alt="Análise de requisitos"
                  height={180}
                  width={330}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RequirementsAnalysis;
