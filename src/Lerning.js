import React, { useState, useEffect } from 'react'
import { Button, Container, Col, FormControl, Row } from 'react-bootstrap';
import { PieChart } from 'react-minimal-pie-chart';


const simpleTexts = `มีที่ขอนแก่นไหมคะ
อีเมล์นี้จาก DHL จริงมั้ยคะ
วันนี้ dhl ส่งของมั้ยครับ
ขอรบกวนอีกรอบค่ะ พอดีใส่รหัสแล้วไม่พบข้อมูลต้องติดต่อทางไหนได้บ้างคะ
ขอคุยกับ เจ้าหน้าที่ครับ
มี สาขา พุนพินไหมคับ
คือสั่งของเเล้ว ส่งทางDHL คะ
อยากคุยกับเจ้าหน้าที่
ติดต่อรับรางวัลครับผม
ผมจะสมัครงานส่งของกับDHL Express ได้ทางช่องทางไหนบ้างครับ
สวัสดีค่ะ อยู่รามคำแหง สาขาใดใกล้สุดคะ
สาขา
จะส่งโทรศัพท์ไปค่ะ กล่องเล็กสุดทาง DHL ใส่ได้มั้ยคะ
ติดต่อเจ้าหน้าที่
DHLมีขนส่งอาหารทะเลแช่แข็งไม๊คะ
ติดต่อรับของรางวัลครับ
เปิดสาขาในต่างจังหวัด มีป่าวค่ะ แบบลงทุนร่วมธุรกิจ กับ dhl
เราสามารถไปรับเองที่สาขาได้ไหมคะ
ติดต่อรับเสื้อคับบ
เจอตำแหน่งไหมครับ
ขอเบอร์โทรสาขาอำนาจเจริญหน่อยค่ะ
พรุ่งนี้ส่งของปกติไหมคะ
โทษนะครับอยากทราบเบอร์โทรติดต่อ dhl สาขานครสวรรค์ครับ
วันอาทิตย์ส่งของไหม
อยากเป็นส่วนหนึ่งของDHL🤣
สอบถามสาขา
ติดต่อยังไงหรอครับ
วันนี้พอดีติดงานเลยไม่ได้รับสายจากDHL ของจะมาส่งอีกครั้งวันพรุ่งนี้ไหมค่ะ
ทางบริษัทได้รับต้นไม้ในการส่งออกไหมค่ะ
มีสาขาที่ home place ทองหล่อใช่ไหมคะ
วันจันทร์ที่14ตุลาคมนี้DHLส่งของมั้ย
วันนี้เปิดทำการไหมค่ะ
พรุ่งนี้ส่งของไหมคะ หรือว่าหยุด
วันนี้ DHL รับพัสดุ ต้นทางไหมคะ
วันนี้เปิดทำการไหม
ต้องการติดต่อรับสินค้าค่ะ
ผมสั่งของจากจีน โดยส่งของผ่าน DHL เป็นจำนวนเงิน 56 USD ของมาถึงไทยวันที่ 16 กันยา ทาง DHL แจ้งว่า ของติดตรวจศุลกากร และต้องทำการลงทะเบียนเนื่องจากสินค้าของผมเป็นพวกน้ำมัน ต้องการให้ทาง DHL ดำเนินการลงทะเบียนโดยเสียค่าใช้จ่ายจำนวน 1,500 บาท จะได้เคลียของออกมาได้
วันนี้ DHL หยุดไหมคะ
พอดีจะส่งของปัยปลายทาง อ.กันทลักษ์ ที่กันทลักษสาขาไหมค่ะ
Dhl จตุจักรไปยังไงคัย
DHL จะเริ่มส่งของวันไหนครับ
สอบถามรายละเอียดการเปิดสาขา มีเปิดเฟรนไชส์ป่าวค่ะ
พรุ่งนี้ หยุดปล่าวครับ
สาขาอยู่จังหวัดบึงกาฬ ตั้งอยู่ตรงไหนครับ
อยากทราบเกี่ยวกับธุรกิจ DHL
ต้องแพคกล่องเองด้วยไหมคะ
วันที่14 DHLหยุดมารับของมั้ยคะ หรือมารับได้ปกติ
พรุ่งนี้หยุดชดเชยมั้ยครับ
ขอเบอร์โทรติดต่อหน่อยคะ
Dhl สาขาศรีสะเกษ
สวัสดีค่ะ ถ้าส่งของไป DHL หนองคาย แล้วระบุด้วยว่าไปรับของเองค่ะ จะถามว่า DHL จะเก็บของอยู่ให้ได้กี่วันค่ะ ถึง 7 วันมั้ยคะ
DHL สาขา นครศรีธรรมราช มีเบอร์ติดต่อหรือป่าวคับ
มีสาขาที่อ่างทองมั้น
ติดต่อพนักงานครับ
อยากสอบถามมีติดต่อภายในประเทศไหมคะ
จะสอบถามว่า เสาอาทิตส่งของไหมครับ
ติดต่อพนักงาน
ภายในครับสามารถติดต่อได้ที่ไหนครับ
ที่ อ.หนองบัวแดง จ.ชัยภูมิ มีสาขา DHL ไหมครับ
ตั้งเเต่วะนจันทร์ ยังไม่ได้รับของเลยคะ
สอบถาม วันอาทิตย์ กับ วันหยุดวันจันทร์นี้ ส่งไหมครับ
DHL eCommerce
อยากทราบ เบอร์ติดต่อ สาขานครศรีธรรมราชคับ
สาขาปัตตานีอยู่ตรงไหนรครับ
หรือหยุดทำการ
ขอเบอร์ติดต่อสาขามุกดาหารหน่อยค่ะ
สาขาใกล้อ.หางดง
ติดต่อที่นี่ได้ไหม
ติดต่อแล้วครับ
เสาอาทิตส่งของไหมครับ
เมื่อวาน DHL หยุดหรือป่าวครับ
สาขา อ.กันทลักษ์ มีไหมค่ะ
14 ตค.หยุดมั้ยคะ
หาสาขา
วันที่ 14 หยุดหรือเปล่า
สอบถามสาขาของdhlในเขตลาดกระบังและหนองจอกครับ
ติดต่อเจ้าหน้าที่ค่ะ
ปกติ DHL ส่งของวันอาทิตย์ไหมครับ
โทรติดต่อ
ติดต่อรับเสื้อเลสเตอร์ คับบบ
พรุ่งนี้เปิดทำการไหมค่ะ
วันนี้จะมาส่งไหมค่ะ
ที่จันทบุรี มี DHLไหมครับ
DHL ไม่ส่งของไป จังหวัดสงขลา หรือครับ
มีสาขาอ่างทองมั้ยคะ
วันอาทิตย์ส่งไหมครับ
จะไม่ใช่ได้ยังไงค่ะก้มันขึ้นของ DHL
พรุ่งนี้มีการทำการส่งของมั้ยคะ หรือหยุดคะ
มีเบอร์ ติดต่อสาขาร่มเกล้าไหมครับ
ขอเบอร์สาขาอำนาจเจริญหน่อยค่ะ
วันจันทร์ที่ 14 หยุดทำการไหมคะ
ขอเบอร์ติดต่อสาขาทุกดาหาร
จะมารับสินค้าไหม
มีการโอนเงินก่อนรับของไหมคะ`
let pieColors = ['#ff0000', '#ff4000', '#ff8000', '#ffbf00', '#ffff00', '#bfff00', '#80ff00', '#40ff00', '#00ff00']



function Learning() {
    //const [number,setNumber] = React.useState(0)
    const [number, setNumber] = useState(0)
    //ผิด number = 3 
    //ถูก setNumber(3)
    const onPressNumber = () => {
        setNumber(number + 1)

    }
    // function onPressNumber() {
    // }
    // React.useEffect(() => {
    //     //life cycle คือ event หรื อstate ของ component ที่เกิดขึ้น
    // }, []);

    useEffect(() => {
    }, []);
    return (
        <div className="App">
            <Container>
                <Row style={{ backgroundColor: 'red', marginTop: 40 }}>
                    {number}
                </Row>
                <Row style={{ backgroundColor: 'red', marginTop: 5 }}>
                    <Button onClick={onPressNumber} variant="success">Clustering</Button>
                </Row>
            </Container>
        </div>
    )
}



function LearningBas() {
    const [number, setNumber] = useState(10)
    const onPressNumber = () => {
        if (number >= 50) {
            setNumber(0)
        } else {
            setNumber(number + 5)
        }
    }

    useEffect(() => {
    }, []);
    return (
        <div className="App">
            <Container>
                <Row style={{ fontSize: 30, marginTop: 40 }}>
                    {number}
                </Row>
                <Row style={{ marginTop: 5 }}>
                    <Button onClick={onPressNumber} variant="success">Add 5</Button>
                </Row>
            </Container>
        </div>
    )
}
function LearningBasSring() {
    const [number, setNumber] = useState(10)

    const [name, setName] = useState("")



    const onPressNumber = () => {
        setName("Sasiprapha")
    }

    useEffect(() => {
    }, []);
    return (
        <div className="App">
            <Container>
                <Row style={{ fontSize: 30, marginTop: 40 }}>
                    {name}
                </Row>
                <Row style={{ marginTop: 5 }}>
                    <Button onClick={onPressNumber} variant="success">Hello Namme</Button>
                </Row>
            </Container>
        </div>
    )
}
function LearningBasFieldSring() {
    const [number, setNumber] = useState(10)
    const [name, setName] = useState("")
    const [text, setText] = useState(simpleTexts)


    const changeText = (event) => {
        console.log('_changeText:', event.target.value)
        //console.log('_changeText:', event.target.value)
        setText(event.target.value)
    }


    const onPressNumber = () => {
        setName('Hello Kun ' + text)
    }

    useEffect(() => {
    }, []);
    return (
        <div className="App">
            <Container>
                <Row>
                    <FormControl style={{ marginTop: 20, height: 300 }} name="input" as="textarea" value={text} onChange={changeText} aria-label="With textarea" />
                </Row>
                <Row style={{ fontSize: 30, marginTop: 40 }}>
                    {name}
                </Row>
                <Row style={{ marginTop: 5 }}>
                    <Button onClick={onPressNumber} variant="success">Submit</Button>
                </Row>
            </Container>
        </div>
    )
}


function LearningBasCallAPI() {
    const [number, setNumber] = useState(10)
    const [name, setName] = useState("")
    const [text, setText] = useState(simpleTexts)
    const [chartDatas, setChartDatas] = React.useState([])



    const changeText = (event) => {
        console.log('_changeText:', event.target.value)
        //console.log('_changeText:', event.target.value)
        setText(event.target.value)
    }

    const onPressNumber = () => {
        //setName('Hello Kun '+text)
        callApi()
    }


    //Api
    const conversTextToArray = (txt) => {
        //console.log('_txt:', txt)
        let arr = txt.split("\n")
        return arr
    }


    const callApi = () => {
        console.log('callApi:')//,text)
        //console.log('_text:', text)
        //เริ่มเตรียมข้อมูล
        let spitText = conversTextToArray(text) || []
        //console.log('_spitText:', spitText)

        const url = "https://nlp.insightera.co.th/api/nlp/clustering?token=97051ade29a61c860f57dc9443128464"

        let objecJson = {
            engine: 'k-mean',
            feature_engine: 'bag-of-word',
            k: 3,
            max_k: 5,
            samples: spitText
        }

        let options = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(objecJson)
        }

        //console.log('_options:',options)
        //เตรียมข้อมูลเสร็จแล้ว
        //Start Call Api เริ่มเรียก API
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                console.log('response_A:', json)
                //เอา cluster กลุ่มข้อมูลมารวมกลุ่มกัน
                let clusterget = json?.result?.message?.cluster || [];
                /*
                let clusterget = []
                if(json){
                    if(json.result){
                        if(json.result.message){
                            if(json.result.message.cluster){
                                    clusterget =  json.result.message.cluster
                            }
                        }
                    }
                }*/
                let nuChartDatas = []
                console.log('_clusterget:', clusterget)
                //["A",2,3,{"key":"value"},5,6] => r0=1,r1=2,.....
                //[1,2,3,4,5,6] => r0=1,r1=2,.....
                //[Array].forEach((object(ข้อมูลจริง),index(ข้อมูลตัวที่),lists(ค่าของมัน[]))=>)
                clusterget.forEach((group, index) => {
                    let getWord = spitText[index]
                    console.log(' group_กรู๊ป:', group, ' รอบที่(index):', index, ' ประโยค(getWord):', getWord)
                    //[Array].find((oject)=>o.group === 1)
                    // find คือการหาว่า มีค่าไหนที่อยู่ใน Array ที่มีค่าเท่ากับ เงื่อนไขที่เราต้องการหรือไม่ ถ้ามีตามเงื่อนไข จะต้องส่งค่าที่เข้าเงื่อนไขนั้นออกมาหนึ่งค่า ถ้าไม่มีก็ส่ง Null
                    //syntax: [Array].find(object=>เงื่อนไข)
                    let found = nuChartDatas.find((o) => o.group === group)
                    if (found) {
                        console.log('_found:', found)
                        // indexOf => คือการหาว่าค่านั้น ๆ อยู่ ลำดับที่เท่าไหร่ของ array
                        //syntax: [Array].indexOf(Object หรือ Value ที่ต้องการหา) ค่าที่ได้จะเป็นลำดับที่ของ Object หรือ Value นั่นที่อยู่ใน Array
                        let getObjectIndex = nuChartDatas.indexOf(found)
                        console.log('       _A_getObjectIndex:', getObjectIndex)

                        //nuChartDatas[getObjectIndex] คือการ get ค่าของ Object ที่อยู่ใน Array ลำดับที่ getObjectIndex
                        let getGroup = nuChartDatas[getObjectIndex]
                        //let getGroup = found
                        console.log('       _A_getGroup:', getGroup)


                        getGroup.words.push(getWord || '')
                        console.log('       _A_getGroup.words:', getGroup.words)



                        getGroup.value = getGroup?.value + 1
                        console.log('       _A_getGroup.value:', getGroup.value)
                    } else {
                        let nuGroup = {
                            title: "ตัวอย่างกลุ่ม " + (group + 1),
                            value: 1,//คือจำนวนข้อความ
                            group: group,//cluster group
                            color: pieColors[group],
                            words: []//สร้างไว้เก็บข้อความที่อยู่ใน groupเดียวกัน
                        }
                        console.log('       _B_nuGroup:', nuGroup)
                        nuGroup.words.push(getWord)
                        //console.log('       _B_nuGroup:', nuGroup)
                        nuChartDatas.push(nuGroup)
                        console.log('       _B_nuChartDatas:', nuChartDatas)
                    }
                });
                console.log('Final_response_nuChartDatas:', nuChartDatas)
                setChartDatas(nuChartDatas)


            })

            .catch((error) => {
                console.log(error);
            });
    }


    useEffect(() => {
    }, []);
    return (
        <div className="App">
            <Container>
                <Row>
                    <FormControl style={{ marginTop: 20, height: 300 }} name="input" as="textarea" value={text} onChange={changeText} aria-label="With textarea" />
                </Row>
                <Row style={{ fontSize: 30, marginTop: 40 }}>
                    {name}
                </Row>
                <Row style={{ marginTop: 5 }}>
                    <Button onClick={onPressNumber} variant="success">Submit</Button>
                </Row>
            </Container>
        </div>
    )
}







function LearningBasCallAPIChart() {
    const [number, setNumber] = useState(10)
    const [name, setName] = useState("")
    const [text, setText] = useState(simpleTexts)
    const [chartDatas, setChartDatas] = React.useState([])


    const [currSegmentIndex, setCurrSegmentIndex] = React.useState(null)


    const onClickPieChart = (e, segmentIndex) => {
        console.log(e, segmentIndex)
        setCurrSegmentIndex(segmentIndex)
    }


    const lineWidth = 100;

    const changeText = (event) => {
        console.log('_changeText:', event.target.value)
        //console.log('_changeText:', event.target.value)
        setText(event.target.value)
    }

    const onPressNumber = () => {
        //setName('Hello Kun '+text)
        callApi()
    }


    //Api
    const conversTextToArray = (txt) => {
        //console.log('_txt:', txt)
        let arr = txt.split("\n")
        return arr
    }


    const callApi = () => {
        console.log('callApi:')//,text)
        //console.log('_text:', text)
        //เริ่มเตรียมข้อมูล
        let spitText = conversTextToArray(text) || []
        //console.log('_spitText:', spitText)

        const url = "https://nlp.insightera.co.th/api/nlp/clustering?token=97051ade29a61c860f57dc9443128464"

        let objecJson = {
            engine: 'k-mean',
            feature_engine: 'bag-of-word',
            k: 3,
            max_k: 5,
            samples: spitText
        }

        let options = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(objecJson)
        }

        //console.log('_options:',options)
        //เตรียมข้อมูลเสร็จแล้ว
        //Start Call Api เริ่มเรียก API
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                console.log('response_A:', json)
                //เอา cluster กลุ่มข้อมูลมารวมกลุ่มกัน
                let clusterget = json?.result?.message?.cluster || [];
                /*
                let clusterget = []
                if(json){
                    if(json.result){
                        if(json.result.message){
                            if(json.result.message.cluster){
                                    clusterget =  json.result.message.cluster
                            }
                        }
                    }
                }*/
                let nuChartDatas = []
                console.log('_clusterget:', clusterget)
                //["A",2,3,{"key":"value"},5,6] => r0=1,r1=2,.....
                //[1,2,3,4,5,6] => r0=1,r1=2,.....
                //[Array].forEach((object(ข้อมูลจริง),index(ข้อมูลตัวที่),lists(ค่าของมัน[]))=>)
                clusterget.forEach((group, index) => {
                    let getWord = spitText[index]
                    //[Array].find((oject)=>o.group === 1)
                    // find คือการหาว่า มีค่าไหนที่อยู่ใน Array ที่มีค่าเท่ากับ เงื่อนไขที่เราต้องการหรือไม่ ถ้ามีตามเงื่อนไข จะต้องส่งค่าที่เข้าเงื่อนไขนั้นออกมาหนึ่งค่า ถ้าไม่มีก็ส่ง Null
                    //syntax: [Array].find(object=>เงื่อนไข)
                    let found = nuChartDatas.find((o) => o.group === group)
                    if (found) {
                        // indexOf => คือการหาว่าค่านั้น ๆ อยู่ ลำดับที่เท่าไหร่ของ array
                        //syntax: [Array].indexOf(Object หรือ Value ที่ต้องการหา) ค่าที่ได้จะเป็นลำดับที่ของ Object หรือ Value นั่นที่อยู่ใน Array
                        let getObjectIndex = nuChartDatas.indexOf(found)

                        //nuChartDatas[getObjectIndex] คือการ get ค่าของ Object ที่อยู่ใน Array ลำดับที่ getObjectIndex
                        let getGroup = nuChartDatas[getObjectIndex]
                        //let getGroup = found


                        getGroup.words.push(getWord || '')



                        getGroup.value = getGroup?.value + 1
                    } else {
                        let nuGroup = {
                            title: "ตัวอย่างกลุ่ม " + (group + 1),
                            value: 1,//คือจำนวนข้อความ
                            group: group,//cluster group
                            color: pieColors[group],
                            words: []//สร้างไว้เก็บข้อความที่อยู่ใน groupเดียวกัน
                        }
                        nuGroup.words.push(getWord)
                        //console.log('       _B_nuGroup:', nuGroup)
                        nuChartDatas.push(nuGroup)
                    }
                });
                console.log('Final_response_nuChartDatas:', nuChartDatas)
                setChartDatas(nuChartDatas)


            })

            .catch((error) => {
                console.log(error);
            });
    }


    useEffect(() => {
    }, []);




    return (
        <div className="App">
            <Container>
                <Row>
                    <FormControl style={{ marginTop: 20, height: 300 }} name="input" as="textarea" value={text} onChange={changeText} aria-label="With textarea" />
                </Row>
                
                <Row style={{ marginTop: 5 }}>
                    <Button onClick={onPressNumber} variant="success">Submit</Button>
                </Row>


                <Row style={{ backgroundColor: 'green' }}>
                    <Col style={{ width: 300, height: 300, maxHeight: 400, maxWidth: '50%' }}>
                        <PieChart
                            onClick={onClickPieChart}
                            data={chartDatas}
                            lineWidth={lineWidth}
                            label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
                            labelPosition={100 - lineWidth / 2}
                            labelStyle={{
                                fontSize: 15,
                                fill: '#fff',
                                opacity: 0.75,
                                pointerEvents: 'none',
                            }}
                        />
                    </Col>
                </Row>

                <Row style={{ backgroundColor: '#ff0' }}>
                    {currSegmentIndex !== null && <Col style={{backgroundColor:'#fff'}}>
                        <div style={{}}>
                        {chartDatas[currSegmentIndex]?.title} ({chartDatas[currSegmentIndex]?.words?.length + ' ข้อความ'})</div>
                        {chartDatas[currSegmentIndex]?.words?.map((word, windex) => {
                            //console.log('_:', windex,word)
                            return <div
                                key={windex}>
                                    {windex + 1}. {word}
                            </div>
                        })}
                    </Col>}
                </Row>








            </Container>
        </div>
    )
}

export default LearningBasCallAPIChart