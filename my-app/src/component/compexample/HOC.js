import React from 'react';
import Button from './Button';
import Styles from './sytles'

const translateProps = (props) => {
    const _style = { ...Styles.disable }
    if (props.disabled) {
        _style = { ..._style, ...Styles.disable }
    }
    const newProps = { ...props, styles: _style };
    return newProps;
}
//constroctor--only runs one
//componetwillmount--only runs one
//render
//componetdidmount-->after render-->only runs ones 
//if changeing state --should render
// rerender
//componetwillreceiveprops--not use
//shouldcompoentupdate-->wanna rerender  if return true-->render happend(nextprops,nextstats)
//componentwillupdate-->
//componentdidupdate-->(preprops,prestate)
//componentwillunmount
// component
//componentunmount
//componetdid update
//shouldcomponet update
//  nextprops,nextstate


export default (wrappedComponent) => {
    return function wrappedRender(args) {
        return wrappedComponent(translateProps(args));
    }
};
