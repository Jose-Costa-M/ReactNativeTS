
export const BasicTypes = () => {
  const name: string = 'José';
  const age: number = 22;
  const isActive: boolean = true;

  const powers: string[] = ['React', 'ReactNative','Angular','Vue','Qwik'];
   
  powers.push('NextJs');


    return (
    <>
     <h3>Tipos básicos</h3>
      { name } { age } { isActive ? 'true' : 'false'}
     <br />
     { powers.join(', ')}



    </>
  )
}
