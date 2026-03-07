const App = () =>{
    return React.createElement("div",{style:{color:"red"}},[
        H1({name:"xxx",age:30,gender:"male"}),
        H1({name:"xxx",age:30,gender:"male"}),
        H1({name:"xxx",age:30,gender:"male"})

    ]);
};

const H1 = ({name,age,gender})=>{
    age++;
    return [
        React.createElement("p",null,name),
        React.createElement("p",null,gender),
        React.createElement("p",null,age),
    ]
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App)); 