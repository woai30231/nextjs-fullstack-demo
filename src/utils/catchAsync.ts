const catchAsync = async (tryCB, catchCB = null, finallyCB = null) => {
  try {
    const check = (res) => {
      if (res.data.status === 203) {
        console.log('error', res.data.message);
        return false;
      }
      return true;
    };

    return tryCB(check);
  } catch (err) {
    console.debug(err);
    if (catchCB) return catchCB(err);
    if (err.response) {
      console.log('error', err.response.data.message);
    } else {
      console.log('error', 'Something went wrong');
    }
  } finally {
    if (finallyCB) await finallyCB();
  }
};

export default catchAsync;
