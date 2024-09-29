const SignUpUser = async (req, res) => {
  return res.status(201).json({
    message: 'All Are Okk',
  });
};
const SignInUser = async (req, res) => {
  return res.status(201).json({
    message: 'All  Are okk  With My SignUp User controller ',
  });
};
export { SignUpUser, SignInUser };
