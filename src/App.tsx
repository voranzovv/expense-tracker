import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
function App() {

  const categories = ["Groceries", "Utilities", "Entertainment", "Transport"] as const

  const schema = z.object({
    description: z.string().min(3, { message: "Description should be at least 3 characters" }).max(50),
    amount: z.number().min(0.01, { message: "Amount should be at least 0.01 CAD" }).max(100_000),
    category: z.enum(categories)

  })
  // create a typescript type
  type ExpenseFormData = z.infer<typeof schema>

  const { register, handleSubmit, formState: { errors } } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) })
  console.log(errors)

  const onSubmit = (data: FieldValues) => {
    console.log(data)
  }

  return (
    <>
      <div className="m-3 border border-primary rounded p-4">
        <h3>Expense Tracker</h3>
        {/* refferencing handleSubmit function */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input
              type="text"
              id="description"
              className="form-control"
              {...register('description')}
            />
            {errors.description && <p className="text-danger">{errors.description.message}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">Amount</label>
            <input
              type="number"
              id="amount"
              className="form-control"
              {...register('amount', { valueAsNumber: true })}
            />
            {errors.amount && <p className="text-danger">{errors.amount?.message}</p>}

          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">Category</label>
            <select className="form-select" id="category" {...register('category')}>
              <option defaultValue={""}></option>
              {categories.map(catergory => <option key={catergory} value={catergory}>{catergory}</option>)}
            </select>
            {errors.category && <p className="text-danger">{errors.category?.message}</p>}
          </div>
          <div className="mb-3">
            <button
              type="submit"
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
