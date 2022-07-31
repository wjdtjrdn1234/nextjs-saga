import React from 'react';
import PropTypes from 'prop-types'
import Link from 'next/link' // 리액트와 다른 next에서 자체적으로 제공해주는 link

function AppLayout({children}) {
  return <div>
      <Link href="/"><a>노드버드</a></Link>
      <Link href="/profile"><a>프로필</a></Link>
      {children}
  </div>;
}

AppLayout.PropTypes = { //props로 넘기는애들은 PropTypes로 검사를해줌 (타입스크립면 상관x)
    children:PropTypes.node.isRequired //칠드런은 node라는 타입임
};

export default AppLayout;

//components 작명달라도 괜찮