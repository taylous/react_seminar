const getRootContents = async () => {
  const response = await fetch(
    'https://l9817xtkq3.execute-api.ap-northeast-2.amazonaws.com/dev/',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  ).catch((reason) => {
    console.log(reason);
    alert('오류 발생');
    return null;
  });

  if (response) {
    console.log(response);
    const data = await response.json();
    return data;
  }
  return response;
};

const getFilesInDirectory = async (nodeId) => {
  const response = await fetch(
    `https://l9817xtkq3.execute-api.ap-northeast-2.amazonaws.com/dev/${nodeId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  ).catch((reason) => {
    console.log(reason);
    alert('오류 발생');
    return null;
  });

  if (response) {
    console.log(response);
    const data = await response.json();
    return data;
  }
  return response;
};

export { getRootContents, getFilesInDirectory };
