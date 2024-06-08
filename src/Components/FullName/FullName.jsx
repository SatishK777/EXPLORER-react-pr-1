
const FullName = ({element}) => {

    let FullName = `${element.firstName} ${element.lastName} ${element.maidenName}`;

    return(

      <p>
      {
        FullName
      }
    </p>

    )

}

export default FullName;

