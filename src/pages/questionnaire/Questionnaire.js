import { Row, Col } from 'antd';
import "../../styles/work/questionnaire.css";
// 引入元件
import { NavSidebar } from "../../components/Nav";
import { Sidebar, IllustrateSidebar, CloseMenu } from "../../components/SidebarMenu"
import { CloseLoanding } from "../../components/Loading";
import { CheckboxValue, TotalQuestion } from "./QuestionnaireFunction";
// 引入Json 
import { Data } from "../../components/Json/Questionnaire.json";

export function Questionnaire() {
    setTimeout(() => {
        CloseLoanding();
    }, 100);
    return <>
        <NavSidebar />
        <Sidebar />
        <IllustrateSidebar />
        <div className="QuestionnaireGroup" onClick={() => { CloseMenu("all") }}>
            <div className="CloorPercentage">
                <div className="CloorPercentageChild"></div>
            </div>
            <h1>餐廳服務問卷</h1>
            <div className="GuestQuestions">
                {Data.map((item, i) => (
                    <div key={i} className="GuestQuestion">
                        <div className="GuestQuestionIndex"><span>問題{i + 1}.</span>{item.question}
                            <button className={"FakeBtn QuestionBtn" + i} value={null}></button></div>
                        <div>
                            <div className="GuestAnswerIndex">
                                <Row>
                                    <Col>
                                        <input className={"answerbox" + i} type="checkbox" checked={null}
                                            onChange={() => { CheckboxValue(i, 0); }}
                                        ></input>
                                        {item.answer1}
                                    </Col>
                                    <Col>
                                        <input className={"answerbox" + i} type="checkbox" checked={null}
                                            onChange={() => { CheckboxValue(i, 1); }}
                                        ></input>
                                        {item.answer2}
                                    </Col>
                                    <Col>
                                        <input className={"answerbox" + i} type="checkbox" checked={null}
                                            onChange={() => { CheckboxValue(i, 2); }}
                                        ></input>
                                        {item.answer3}
                                    </Col>
                                    <Col>
                                        <input className={"answerbox" + i} type="checkbox" checked={null}
                                            onChange={() => { CheckboxValue(i, 3); }}
                                        ></input>
                                        {item.answer4}
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                ))}
                <footer><button className="ThxBtn" onClick={TotalQuestion}>送出意見</button></footer>
            </div>
        </div>
    </>
}

