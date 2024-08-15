import { FormEvent } from "react"
function App() {

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e)
  }

  return (
    <>
      <div className="m-3 border border-primary rounded p-4">
        <h3>Expense Tracker</h3>
        {/* refferencing handleSubmit function */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" id="description" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">Amount</label>
            <input type="number" id="amount" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">Category</label>
            <select className="form-select" aria-label="Default select example">
              <option defaultValue={""}></option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="mb-3">
            <button
              type="button"
              className="btn btn-primary"

            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
