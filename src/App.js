import './App.css';
import Customer from './components/Customer'

const set_customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동1',
  'birthday':"11",
  'gender': '남자',
  'job': '대학생dwaa'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '홍길동2',
    'birthday':"22",
    'gender': '여자',
    'job': '대학생2dwaa'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '홍길동3',
    'birthday':"33",
    'gender': '여자3',
    'job': '대학생3dwawwwa'
  }   
  
]


function App() {
  return (
    
    <div>
      <h1>타이틀</h1>
      {
        set_customers.map(c =>{
          return(
            <Customer
              key={c.id}  //key aaa항목은 반드a시(없으면 브라우저에서 자바스크립트 에러남)
              id={c.id}
              name={c.name}
              image={c.image}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}              
            />
          )
        })
      }
    {/* <Customer
      id = {set_customers[0].id}
      image = {set_customers[0].image}
      name = {set_customers[0].name}
      birthday = {set_customers[0].birthday}
      gender = {set_customers[0].gender}
      job = {set_customers[0].job}
    />
    <Customer
      id = {set_customers[1].id}
      image = {set_customers[1].image}
      name = {set_customers[1].name}
      birthday = {set_customers[1].birthday}
      gender = {set_customers[1].gender}
      job = {set_customers[1].job}
    />    
    <Customer
      id = {set_customers[2].id}
      image = {set_customers[2].image}
      name = {set_customers[2].name}
      birthday = {set_customers[2].birthday}
      gender = {set_customers[2].gender}
      job = {set_customers[2].job}
    /> */}
    </div>
    
  );
}

export default App;
