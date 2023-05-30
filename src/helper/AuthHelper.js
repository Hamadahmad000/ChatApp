const {useSelector} = require('react-redux');

const isLogin = () => {
  const Data = useSelector(state => state?.Auth?.userData);
  console.log(Data);
  return Data?._id ? true : false;
};

export default isLogin;

// Created By Hamad Mirza
