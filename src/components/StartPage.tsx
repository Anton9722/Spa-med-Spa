import Products from "./Products"

function StartPage(props: any) {

  return (
    <div>
      <div id="backgroundStartPage">
        <div id="startPageCenterDiv">
          <h1>Dags att koppla av?</h1>
          <button className="btn" onClick={() => props.handlePageNavigation("booking")}>Boka tid hos oss</button>
        </div>
      </div>
      <Products />
    </div>
  )
}

export default StartPage