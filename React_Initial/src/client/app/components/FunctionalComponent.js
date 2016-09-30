//Functional Component :單純地 render UI 的 stateless components
const FunctionalComponent = () => (
    <div>Hello, TestComponent</div>
  );

FunctionalComponent.propTypes = {
  todo: React.PropTypes.object,
  name : React.PropTypes.string,
}

// Prop 預設值，若對應 props 沒傳入值將會使用 default 值
FunctionalComponent.defaultProps = {
 todo: {}, 
 name: 'defaultName', 
};

export default FunctionalComponent;