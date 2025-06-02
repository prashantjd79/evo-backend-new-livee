const Assignment = require("../models/Assignment");

const Lesson = require("../models/Lesson");

const createAssignment = async (req, res) => {
  const { lessonId, title, description } = req.body;

  try {
    // Check for file
    if (!req.file) {
      return res.status(400).json({ message: "PDF attachment is required" });
    }

    // Check lesson
    const lesson = await Lesson.findById(lessonId);
    if (!lesson) {
      return res.status(404).json({ message: "Lesson not found" });
    }

    // File path (store relative URL)
    const attachmentUrl = `assignment/${req.file.filename}`;

    const newAssignment = {
      title,
      description,
      attachmentUrl,
    };

    lesson.assignments.push(newAssignment);
    await lesson.save();

    res.status(201).json({
      message: "Assignment added successfully",
      assignment: {
        _id: newAssignment._id,
        title: newAssignment.title,
        description: newAssignment.description,
        attachmentUrl: newAssignment.attachmentUrl || null,
        lessonId: lesson._id,
      }
    });
    
  } catch (error) {
    console.error("Assignment Upload Error:", error);
    res.status(500).json({ message: error.message });
  }
};


const updateAssignment = async (req, res) => {
  const { lessonId, assignmentId, title, description } = req.body;

  try {
    const lesson = await Lesson.findById(lessonId);
    if (!lesson) return res.status(404).json({ message: "Lesson not found" });

    const assignment = lesson.assignments.id(assignmentId);
    if (!assignment) return res.status(404).json({ message: "Assignment not found" });

    // Update fields
    if (title) assignment.title = title;
    if (description) assignment.description = description;

    // If a new PDF is uploaded
    if (req.file) {
      assignment.attachmentUrl = `assignment/${req.file.filename}`;
    }

    await lesson.save();

    res.json({
      message: "Assignment updated successfully",
      assignment
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



const deleteAssignment = async (req, res) => {
  const { assignmentId } = req.params;

  try {
    const updatedLesson = await Lesson.findOneAndUpdate(
      { "assignments._id": assignmentId },
      { $pull: { assignments: { _id: assignmentId } } },
      { new: true }
    );

    if (!updatedLesson) {
      return res.status(404).json({ message: "Assignment not found" });
    }

    res.json({ message: "Assignment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports={createAssignment,updateAssignment,deleteAssignment}