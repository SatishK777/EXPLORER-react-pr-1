
const Data = ({result}) => {

    return(

        <div>
        {
          result.map((element,key) => (

            <h1 key = {key++}>
              {
                element.id
              }
            </h1>

          ))

        }
      </div>

    )

}

export default Data;

