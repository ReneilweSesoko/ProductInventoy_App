// module.exports = mongoose => {
//     var schema = mongoose.Schema({
//         title: String,
//         description: String,
//         published: Boolean
//     },{timestamps: true});

//     schema.method("toJSON", function(){
//         const {___v,_id,...object} = this.toObject();
//         object.id = _id;
//         return object;
//     });

//     const Tutorial = mongoose.model("tutorial", schema)
//     return Tutorial;
// };

module.exports = mongoose => {
    const Tutorial = mongoose.model("tutorial", mongoose.Schema({
        title: String,
        description: String,
        publishe: Boolean
    }, { timestamps: true})
    );
    return Tutorial;
};