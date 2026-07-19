import "./ContactForm.css";

function ContactForm({
  form,
  handleChange,
  handleSubmit,
  success,
}) {
  return (
    <>
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
        />

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

        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
        />

        <button type="submit">
          Submit
        </button>

      </form>

      {success && (
        <h3>Form Submitted Successfully!</h3>
      )}
    </>
  );
}

export default ContactForm;