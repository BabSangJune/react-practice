import React, { useEffect } from 'react';
import MyParagraph from './MyParagraph';

/**
 * DemoOutput 설명
 * @param {boolean} show - show가 true일 때만 출력
 * @returns {JSX.Element}
 * @author 웹팀 박상준
 * @constructor
 * @example
 * <DemoOutput show={ showParagraph }/>
 */
const DemoOutput = ({ show }) => {
  /** @type {string} jsdocTest 상수 설명 입니다. */
  const jsdocTest = 'jsdocTest';

  /**
   * jsdocFunc 설명
   * @param {string} jsdocTest - 해당 param 설명입니다.
   */
  const jsdocFunc = (jsdocTest) => {
    console.log('jsdocFunc', jsdocTest);
  }

  /** @see useEffect 설명 */
  useEffect(() => {
      jsdocFunc();
    }, [jsdocTest]
  );

  return <MyParagraph>{ show ? 'This is new!' : '' }</MyParagraph>;
};

export default React.memo(DemoOutput);
