const applicationService = require('../services/application');

// Must be ONLY accessed as authenticated route
// need to rewrite the logic to actually utilize ASSOCIATIONS off of current user
const postApplication = async (req, res, next) => {
  try {
    const { application } = req.body;
    if (!application)
      throw new Error(`Request must include a valid 'application' field`);
    
    const newApplication = await applicationService.add(application, req.user.id);

    return res.status(200).json({
      message: 'Successfully created new application.',
      application: newApplication,
    });
  } catch (error) {
    return res.status(422).json({ message: error.message });
  }
}

const getAllApplications = async (req, res, next) => {
  try {
    const applications = await applicationService.getAllFromUser(req.user.id);
    return res.status(200).json({
      applications
    });
  } catch (error) {
    return res.status(500).send(`Internal Server Error: ${error.message}`);
  }
}

const updateApplication = async (req, res, next) => {
  try {
    const { application } = req.body;
    if (!application)
      throw new Error(`Request must include a valid 'application' field`);
    
    const [queryStatus, [updatedApplication] ] = await applicationService.update(req.params.id, req.user.id, application);

    if (queryStatus === 0)
      throw new Error(`Cannot update that record`);

    return res.status(200).json({
      message: 'Successfully updated application.',
      application: updatedApplication,
    });
  } catch (error) {
    return res.status(422).json({ message: error.message });
  }
}

const deleteApplication = async (req, res, next) => {
  try {
    const result = await applicationService.destroy(req.params.id, req.user.id)  
    
    if (result === 0)
      throw new Error(`Cannot delete that record`);

    return res.status(200).json({
      message: 'Successfully deleted application.',
      id: req.params.id,
    });
  } catch (error) {
    return res.status(422).json({ message: error.message });
  }
}

module.exports = {
  postApplication,
  getAllApplications,
  updateApplication,
  deleteApplication,
}
