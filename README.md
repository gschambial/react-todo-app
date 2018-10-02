Quick Pointers for react-todo-app:


## Create React App
    -- npx create-react-app <app-name>
    -- npm start

## Type of Components
- Class Components
  - Have state
  - Created using class keyword
  - Must have atleast one mmethod: render
  - Can use lifecycle hooks

- Functional/UI Components
  - Don't have state
  - Created using function keyword
  - Render method isn't mandatory as a Function can return only one value
  - Cannot use lifecycle hooks

## Props
- To pass from Parent to Child Component
  - Passing state
  - Passing functions
    
    Example:
    ```
    <Todos todos = {this.state.todos} deleteTodo = {this.deleteTodo} />
    ```
    
## Destructuring Props in Nested Components
- Class Components
  ```
  const localProps = { props };
  const todos = { props.todos };
  const deleteTodo = { props.deleteTodo };
  ```
- Functional Components
  ```
  const Todos = ({ todos, deleteTodo }) => {
  }
  ```

## Accessing this inside Component functions 
- Create Components using Fat Arrow
  ```
  myFunction = () =>{
    //Access this here
  }

  instead of
  
  myFunction(){
  }
  ```

## Component Lifecycle
- constructor
- render
- componentDidMount
- componentDidUpdate

 ## React Router
 -  Step 1
    ```
    npm install react-router-dom
    ```
 -  Step 2
    ```
    import BrowserRouter, Route from 'react-router-dom'
    
    <BrowserRouter>
          <Route path="/" component={Home}/>
          <Route path="/about" component={About}/>
    </BrowserRouter>   
 - Step 3
    - Passing props
      ```
      <Route path="/todos" render={(props) => <Todos {...props} todos = {this.state.todos} 
                                                          deleteTodo = {this.deleteTodo} />}/>
      ```
    - Exact match
      ```
      <Route exact path="/" component={Home}/>
      ```
      
## Links & NavLinks 
    -- import {Link, Navlink} from 'react-router-dom'
    
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/todos">Todos</Link>

        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/todos">Todos</NavLink>
    
    -- Difference

       -- In case of NavLink, we get a class 'active' attached to underlying
          anchor tag, to indicate currently selected NavLink
    
## Redirecting programetically

    -- props.history.push('/todos');

    -- But, all these values are only available to Components which are present as Route 

    For example,

        <Navbar/>
        <Route exact path="/" component={Home}/>

        -- Navbar doesn't have access to default properties attached by Reach Router

        -- Way around: Higher order components to supercharge a Component

            import { withRouter } from 'react-router-dom';

            export default withRouter(Navbar);

## Higher Order Components

    -- Add some extra functionality to original commponent

        import React from 'react';

        const Rainbow = (WrappedComponent) => {
            const color = ['Red', 'Green', 'Blue'];
            const randomColor = color[Math.floor(Math.random() * 2)];
            const className = randomColor+'-text';
            return(props) => {
                return(
                    <div className={className}>
                        <WrappedComponent {...props}/>
                    </div>
                );
            }
        }

        export default Rainbow;

## Getting data from an API

    -- npm install axios

    -- axios.get('url').then(response => {

    })

## Route Paramters

    -- <Route path="/:post_id" component={Post} />              

    -- let id = this.props.match.params.post_id;

## Switch tag

    -- to load only one matching component

     <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/todos" render={(props) => <Todos {...props} todos = {this.state.todos} 
                          deleteTodo = {this.deleteTodo} addTodo = {this.addTodo}/>}/>
            <Route path="/:post_id" component={Post} />
    </Switch>

## Importing Images

    -- Import your image:

        import Icon from '../so-icon.png';
    
    -- Use your image

        <img src={Icon} alt="Icon"/>

## Redux

    -- Centralized data store

    const { createStore } = Redux;

    const initState = {
        todos: [],
        posts: []
    };

    function myReducer(state = initState, action){
        if(action.type == 'ADD_TODO'){
            return {
                ...state,
                todos: [...state.todos, action.todo]
            }
        }

    };

    const store = createStore(myReducer);

    store.subscribe( () => {
        console.log(store.getState());
    });

    const todoAction = { type: 'ADD_TODO', todo: 'Buy milk'};

    store.dispatch(todoAction);

## React with Redux

    -- install 2 packages

        npm install redux

        npm install react-redux

    -- Imports

        import {createStore} from 'redux';
        import {Provider} from 'react-redux';

    -- Create a Reducer

        const initState = {
        posts: []
        };

        const rootReducer = (state = initState, action) =>{ 

        };

        export default rootReducer;

    -- Import Reducer

        import {rootReducer} from './reducers/RootReducer';

    -- Create Store

        const store = createStore(rootReducer);

    -- Link Provider to our App

        ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

    -- Connect a Component to Store

        -- Import

            import {connect} from 'react-redux';

        -- Use HOC returned by connect method to supercharge our component

            export default connect()(Home);

    -- Map data from store to our component

        -- use mapStateToProps method to add objects from Redux Store to Component Props

            const mapStateToProps = (state) =>{
                return {
                    posts : state.posts
                }
            }

            export default connect(mapStateToProps)(Home)


    -- Map Dispatches to Props

        -- use mapDispatchToProps to link Components props to Reducer's actions 

            const mapDispatchToProps = (dispatch) => {
                return {
                    deletePost: (id) => {
                        dispatch({type: 'DELETE_POST', id: id})
                    }
                }
            }

       
    -- Action Creators

        export const deletePost = (id) => {
            return {
                type: 'DELETE_POST',
                id: id
            };
        };
