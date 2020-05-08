import { SchemaDefinition } from 'mongoose';

export const RatingField: SchemaDefinition = {
  steps: {
    type: Number,
    min: 1,
    max: 10,
  },
  shape: {
    type: String,
    enum: [
      'Heart',
      'Star',
      'thumbs-up',
      'thumbs-down',
      'Circle',
      'Square',
      'Check Circle',
      'Smile Outlined',
      'Hourglass',
      'bell',
      'Paper Plane',
      'Comment',
      'Trash',
    ],
  },
  validShapes: {
    type: [{
      type: String,
    }]
  }
}
