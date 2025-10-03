# Live Link: https://react-router-and-form-data.netlify.app/

## 4 ways to get data from a form
1. use onSubmit. const name = e.target.[name of input field].value 
2. use form action and formData in the action handler. formData.get('name of the input field')
3. to check validation instant: controlled filed: use onsubmit and input field defaultValue={statename}, make onchange handler for individual input, from there get data by e.target.value. er sathe if diya validation/ error check kora arekti error state declare kore. 
    summary: Controlled component one per field. use state on change of the field. useful to dynamically handle error.
3.  handle all controlled field on one state object
    const [formdData, setForData] = useState({
        name: '',
        password: '',
        phone: '',
    })
4. uncontrolled: react will not control, using useRef('')  
    const emailRef = useRef(''); 
    <!-- <input type="email" ref={emailRef}  /> -->
    email = emailRef.current.value;