export function validation(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Name is required";
  } else if (
    !/^[a-zA-Z\s]*$/.test(input.name) ||
    typeof input.name !== "string"
  ) {
    errors.name = "Invalid name";
  }

  if (!input.description) {
    errors.description = "Description is required";
  }

  if (!input.released) {
    errors.released = "Released Date is required";
  } else if (
    !/^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/.test(
      input.released
    )
  ) {
    errors.released = "The date format is wrong";
  }

  if (!input.background_image) {
    errors.background_image = "Image URL is required";
  } else if (
    !/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(input.background_image)
  ) {
    errors.background_image = "The URL format is wrong";
  }

  if (!input.rating) {
    errors.rating = "Rating is required";
  } else if (
    input.rating > 5 ||
    input.rating < 0 ||
    /^(?:[1-9]\d{0,4}|0)\.\d$/.test(input.rating)
  ) {
    errors.rating =
      "The rating must be a number not greater than 5, and with at least two decimals";
  }

  if (input.genres.length < 1) {
    errors.genres = "You must choose at least one option";
  }

  if (input.platforms.length < 1) {
    errors.platforms = "You must choose at least one option";
  }

  return errors;
}
