import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});

app.get('/initials', (req,res) => {
  const initials = req.query.fullname;
  console.log(initials);
  const fio = initials.split(' ');
  var x = -1;
  var y = undefined;
  var sum = 0;
  for(var i = 0; x === -1 && i < 10; i++){
    x = initials.indexOf(i);
  }
  const arrFor_ = initials.split('_');
  const arrForSlash = initials.split('/');
  if(((isNaN(fio[0]) && isNaN(fio[1]) && isNaN(fio[2])) != true) || x != -1 || arrFor_.length > 1 || arrForSlash.length > 1 ){
    res.send('Invalid fullname');
  }else if(fio.length === 3) {
    const name = fio[0];
    const fatherName = fio[1];
    const surname = fio[2];
    const initials = surname + " " + name.charAt(0) + ". " + fatherName.charAt(0) + ".";
    res.send(initials);
  }else if(fio.length === 2){
    const name = fio[0];
    const surname = fio[1];
    const initials = surname + " " + name.charAt(0) + ".";
    res.send(initials);
  }else if(fio.length === 1){
    const surname = fio[0];
    res.send(surname);
  }else{
    res.send('Invalid fullname')
  }
});
