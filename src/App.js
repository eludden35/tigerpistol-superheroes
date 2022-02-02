import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabheader from './components/Tabheader';
import ViewContent from './components/ViewContent';


function App() {
  const [tabs, setTabs] = useState([
    {
      selected: true,
      title: 'List View',
      content: "Tab 1 content is showing here."
    },
    {
      selected: false,
      title: "Grid View",
      content: "Tab 2 content is showing here."
    }
  ]);

  const [superHeroes, setSuperHeroes] = useState([]);
  const [loading, setLoading] = useState(false);
  var data = [];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      for(var i = 1; i <= 20; i++){
        console.log("looping...")
        let awaitedData = await fetch(`https://superheroapi.com/api/5180329328645896/${i}`)
        let jsonData = awaitedData.json()
        data.push(jsonData);
      }
      let tempArr = [];
      await data.forEach(element => {
          console.log("entered...")
          element.then(res => tempArr.push(res))
      });

      setSuperHeroes(tempArr)
      setLoading(false);
      
    }
    fetchData();
  },[])

  const handleClick = (index) => {

    tabs.map((tab, i) => {

      index === i ? tab.selected = true : tab.selected = false;

      setTabs( [ ...tabs.slice(0, i), tab ] );

      return console.log([ ...tabs.slice(0,i), tab ]);

    })

  }

  return (
    <div className="App">

      <h1 style={{margin: '0 auto', width: "fit-content"}} onClick={() => console.log(superHeroes)}>Superheroes</h1>

      {/* Tab Headers */}
      <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-6 d-flex p-5' style={{justifyContent: "center"}}>
          {
            tabs.map((tab, i) => {
              return <Tabheader currentTab={tab} index={i} whenClicked={ handleClick }/>;
            })
          }
        </div>
        <div className='col-md-3'></div>
      </div>

      {/* Tab Content */}
      {

        loading ?
        <div className='row d-flex' style={{justifyContent: "space-around", marginTop: "200px"}}>
          <div className="col-md-4"></div>
          <div className="lds-roller col-md-1"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          <div className="col-md-4"></div>
        </div>

        :

        <div className="row">
          <div className="col-md-1"></div>
          <div className= "col-md-10" style={{height: "500px", overflow: "auto"}}>
            <div className='row d-flex' style={{justifyContent: "space-around"}}>
  
              { 
                tabs.map((tab, i) => {
                  return tab.selected ? <ViewContent superHeroData={superHeroes} index={i}/>  : "";
                }) 
              }
  
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>

      }

    </div>
  );
}

export default App;
