import React from "react";
import classes from './Person.module.css';

const person = (props) => {
    let children;
    if(props.children) children = <p>{props.children}</p>;

    let assignedClasses = [];
    if(props.name.length > 3){
        assignedClasses.push('red');
    }
    if(props.name.length > 5){
        assignedClasses.push('bold');
    }

    return (
        <div className={classes.Person}>
            <p className={ assignedClasses.join(' ') }>I am {props.name} and i am {props.age}</p>
            <p><input type="text" onChange={props.change} value={props.name}/></p>
            {children}
        </div>
    );
}
export default person;

/* Note:
1. Rename css/scss/sass files as:
    - style.module.css
    - style.module.scss
    - style.module.sass

2. For react-scripts before "react-scripts@2.0.0"
    Tweak the WebPack config
    i.   npm run eject
            confirm it yes
    ii.  Edit "webpack.config.dev.js"
            find  "test: /\.css$/,"  (It is inside "module" property)
            UPDATE from
            {
                loader: require.resolve('css-loader'),
                options: {
                    importLoaders: 1
                }
            }
            TO
            {
                loader: require.resolve('css-loader'),
                options: {
                    importLoaders: 1,
                    modules: true,
                    localIdentName: '[name]__[local]__[hash:base64:5]'
                }
            }
    
    iii. Edit "webpack.config.prod.js"
            find  "test: /\.css$/,"  (It is inside "module" property)
            UPDATE from
            {
                loader: require.resolve('css-loader'),
                options: {
                    importLoaders: 1,
                    minimize: true,
                    sourceMap: shouldUseSourceMap
                }
            }
            TO
            {
                loader: require.resolve('css-loader'),
                options: {
                    importLoaders: 1,
                    modules: true,
                    localIdentName: '[name]__[local]__[hash:base64:5]'
                    minimize: true,
                    sourceMap: shouldUseSourceMap
                }
            }

    iv.  Restart the Server
        -> CTRL + C and confirm
        -> npm start
*/