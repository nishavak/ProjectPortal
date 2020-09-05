from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from . import views

urlpatterns = [
    # COORDINATOR
    path("coordinatorStudent/", views.coordinatorStudent),
    path("coordinatorStudentDetail/<int:id>/", views.coordinatorStudentDetail),
    path("coordinatorGroup/", views.coordinatorGroup),
    path("coordinatorGroupDetail/<int:id>", views.coordinatorGroupDetail),
    path("coordinatorGuide/", views.coordinatorGuide),
    path("coordinatorGuideDetail/<int:id>/", views.coordinatorGuideDetail),
    path("coordinatorProject/", views.coordinatorProject),
    path("coordinatorProjectDetail/<int:id>/", views.coordinatorProjectDetail),
    path("coordinatorAssignmentList/", views.coordinatorAssignmentList),
    path(
        "coordinatorGroupSubmissionDetails/<int:assignmentId>/<int:teamId>/",
        views.coordinatorGroupSubmissionDetails,
    ),
    path("coordinatorAssignmentDetail/<int:id>/", views.coordinatorAssignmentDetail),
    path("coordinatorCreateAssignment/", views.coordinatorCreateAssignment),
    path("coordinatorRemoveAttachments/", views.coordinatorRemoveAttachments),
    path("coordinatorSubmissionStatistics/", views.coordinatorSubmissionStatistics),
    path("coordinatorGradingStatistics/", views.coordinatorGradingStatistics),
    path("coordinatorGroupRequest/", views.coordinatorGroupRequest),
    path(
        "coordinatorGroupRequestManage/<int:id>/<slug:what>",
        views.coordinatorGroupRequestManage,
    ),
    path("coordinatorProjectRequest/", views.coordinatorProjectRequest),
    path(
        "coordinatorProjectRequestManage/<int:id>/<slug:what>",
        views.coordinatorProjectRequestManage,
    ),
    # GUIDE
    path("guideDashboard/", views.guideDashboard),
    path("guideAssignmentList/<int:groupId>/", views.guideAssignmentList),
    path(
        "guideAssignmentDetails/<int:groupId>/<int:pk>/", views.guideAssignmentDetails
    ),
    path("guideAssignGrades/", views.guideAssignGrades),
    path("guideDetailsForm/", views.guideDetailsForm),
    path("guideGroup/<int:groupId>/", views.guideGroup),
    path("guideHeader/", views.guideHeader),
    path("guidePersonal/", views.guidePersonal),
    path("acceptRequest/", views.acceptRequest),
    path("rejectRequest/", views.rejectRequest),
    path("guideRequest/", views.guideRequest),
    # STUDENT
    path("studentPersonal/", views.studentPersonal),
    path("createProject/", views.createProject),
    path("getProject/", views.getProject),
    path("studentAssignments/", views.studentAssignments),
    path("amILeader/", views.amILeader),
    path("groupRegistered/", views.groupRegistered),
    path("myRollNumber/", views.myRollNumber),
    path("createTeam/", views.createTeam),
    path("groupData/", views.groupData),
    path("addStudent/", views.addStudent),
    path("guideAssigned/", views.guideAssigned),
    path("cancelRequest/", views.cancelRequest),
    path("removeStudent/", views.removeStudent),
    path("makeLeader/", views.makeLeader),
    path("requestGuide/", views.requestGuide),
    path("searchGuide/<str:q>", views.searchGuide),
    path("assignment/<int:id>", views.assignment),
    path("assignmentSubmit/<int:id>", views.assignmentSubmit),
    path("studentAssignmentDetails/<int:id>", views.studentAssignmentDetails),
    path("studentUnsubmitAssignment/<int:id>", views.studentUnsubmitAssignment),
    # AUTHENTICATION & MISCELLANEOUS
    path("whoAmI/", views.whoAmI),
    path("signIn/", views.signIn),
    path("signUp/", views.signUp),
    path("guideSignUp/", views.guideSignUp),
    path("signOut/", views.signOut),
    path("changePassword/", views.changePassword),
    path("coordinatorSignup/", views.coordinatorSignup),
    path("changePhoto/", views.changePhoto),
    path("getImage/", views.getImage),
    path("forgot-password/", views.forgotPassword),
    path("activate/<uidb64>/<token>/", views.activate, name="activate"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
