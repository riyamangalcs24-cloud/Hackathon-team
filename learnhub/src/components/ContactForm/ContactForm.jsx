import "./ContactForm.css";
import SuccessMessage from "../SuccessMessage/SuccessMessage";

function ContactForm({
  form,
  handleChange,
  handleSubmit,
  handleReset,
  errors,
  success,
}) {
  return (
    <>
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            <option value="">Select Course</option>
            <option value="Web Development">Web Development</option>
            <option value="Data Science">Data Science</option>
            <option value="UI/UX Design">UI/UX Design</option>
          </select>
          {errors.category && <span className="error-message">{errors.category}</span>}
        </div>

        <div className="form-group">
          <input
            type="date"
            name="startDate"
            value={form.startDate}
            onChange={handleChange}
          />
        </div>

        <div className="radio-group">
          <label>Preferred Mode:</label>
          <label>
            <input
              type="radio"
              name="mode"
              value="Online"
              checked={form.mode === "Online"}
              onChange={handleChange}
            />
            Online
          </label>
          <label>
            <input
              type="radio"
              name="mode"
              value="Offline"
              checked={form.mode === "Offline"}
              onChange={handleChange}
            />
            Offline
          </label>
          <label>
            <input
              type="radio"
              name="mode"
              value="Hybrid"
              checked={form.mode === "Hybrid"}
              onChange={handleChange}
            />
            Hybrid
          </label>
        </div>

        <div className="checkbox-group">
          <label>Interests:</label>
          <label>
            <input
              type="checkbox"
              name="interests"
              value="React"
              checked={form.interests.includes("React")}
              onChange={handleChange}
            />
            React
          </label>
          <label>
            <input
              type="checkbox"
              name="interests"
              value="Node"
              checked={form.interests.includes("Node")}
              onChange={handleChange}
            />
            Node.js
          </label>
          <label>
            <input
              type="checkbox"
              name="interests"
              value="Python"
              checked={form.interests.includes("Python")}
              onChange={handleChange}
            />
            Python
          </label>
          <label>
            <input
              type="checkbox"
              name="interests"
              value="UI/UX"
              checked={form.interests.includes("UI/UX")}
              onChange={handleChange}
            />
            UI/UX
          </label>
        </div>

        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
        />

        <div className="button-group">
          <button type="submit">Submit</button>
          <button type="reset" onClick={handleReset}>Reset</button>
        </div>

      </form>

      {success && <SuccessMessage />}
    </>
  );
}

export default ContactForm;