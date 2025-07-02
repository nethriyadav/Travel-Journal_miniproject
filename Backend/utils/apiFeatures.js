// class APIFeatures {
//   constructor(query, queryString) {
//     this.query = query;
//     this.queryString = queryString;
//   }

//   filter() {
//     const queryObj = { ...this.queryString };
//     const excludeFields = ["page", "sort", "limit", "fields"];
//     excludeFields.forEach((el) => delete queryObj[el]);
//     console.log(this.queryString, queryObj);

//     let queryStr = JSON.stringify(queryObj);
//     queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
//     console.log(JSON.parse(queryStr));
//     this.query = this.query.find(JSON.parse(queryStr));

//     if (this.queryString.search) {
//       this.query = this.query.find({
//         $or: [
//           { title: { $regex: this.queryString.search, $options: "i" } },
//           { "location.name": { $regex: this.queryString.search, $options: "i" } },
//         ],
//       });
//     }
  
//     if (this.queryString.tags) {
//       const tagsArray = this.queryString.tags.split(",");
//       this.query = this.query.find({ tags: { $in: tagsArray } });
//     }



//     return this;
//   }

//   sort() {
//     if (this.queryString.sort) {
//       const sortBy = this.queryString.sort.split(",").join(" ");
//       this.query = this.query.sort(sortBy);
//     } else {
//       this.query = this.query.sort("-createdAt");
//     }
//     return this;
//   }

//   limitFields() {
//     if (this.queryString.fields) {
//       const fields = this.queryString.fields.split(",").join(" ");
//       this.query = this.query.select(fields);
//     } else {
//       this.query = this.query.select("-__v");
//     }
//     return this;
//   }

//   paginate() {
//     const page = this.queryString.page * 1 || 1;
//     const limit = this.queryString.limit * 1 || 100;
//     const skip = (page - 1) * limit;
//     this.query = this.query.skip(skip).limit(limit);
//     return this;
//   }
// }

// module.exports = APIFeatures;




class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const queryObj = { ...this.queryString };
    const excludeFields = ["page", "sort", "limit", "fields","tags","search"];
    excludeFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    
    let filters = [JSON.parse(queryStr)];

    // 🔹 Apply Search Filter
    if (this.queryString.search) {
      filters.push({
        $or: [
          { title: { $regex: this.queryString.search, $options: "i" } },
          { "location.name": { $regex: this.queryString.search, $options: "i" } },
        ],
      });
    }

    // 🔹 Apply Tags Filter
    if (this.queryString.tags) {
      const tagsArray = this.queryString.tags.split(",");
      filters.push({ tags: { $in: tagsArray } });
    }

    // 🔹 Apply Combined Filters Using $and
    this.query = this.query.find(filters.length > 1 ? { $and: filters } : filters[0]);

    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-createdAt");
    }
    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(",").join(" ");
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select("-__v");
    }
    return this;
  }

  paginate() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 100;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

module.exports = APIFeatures;

