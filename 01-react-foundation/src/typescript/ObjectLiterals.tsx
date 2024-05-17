
interface Person{
    fullName: string;
    age: number;
    address: {
        country: string;
        houseNo: number;
    }
    isAlive?: boolean
    
}

export const ObjectLiterals = () => {

const person: Person = {
    fullName: 'José Miguel',
    age: 22,
    isAlive: true,
    address: {
      country: 'México',
      houseNo: 132,
    },

}


  return (
   <>
     <h3>Objectos Literales</h3>
        <pre>
            {JSON.stringify(person, null, 2)}
        </pre>
   </>
  )
}
