from django.conf import settings
from django.conf.urls.static import static
from django.urls import path

from . import views

urlpatterns = [
    # COORDINATOR
    path('coordinatorStudent/', views.coordinatorStudent),
    path('coordinatorStudentDetail/<int:id>/', views.coordinatorStudentDetail),
    path('coordinatorGroup/', views.coordinatorGroup),
    path('coordinatorGuide/', views.coordinatorGuide),
    path('coordinatorProject/', views.coordinatorProject),
    path('coordinatorAssignmentList/', views.coordinatorAssignmentList),
    path('coordinatorGroupSubmissionDetails/<int:assignmentId>/<int:teamId>/',
         views.coordinatorGroupSubmissionDetails),
    path('coordinatorAssignmentDetail/<int:id>/',
         views.coordinatorAssignmentDetail),
    path('coordinatorCreateAssignment/', views.coordinatorCreateAssignment),
    path('coordinatorSubmissionStatistics/',
         views.coordinatorSubmissionStatistics),
    path('coordinatorGradingStatistics/',
         views.coordinatorGradingStatistics),
    path('coordinatorGroupRequest/',
         views.coordinatorGroupRequest),
    path('coordinatorGroupRequestManage/<int:id>/<slug:status>/',
         views.coordinatorGroupRequestManage),
    path('coordinatorProjectRequest/',
         views.coordinatorProjectRequest),
    path('coordinatorProjectRequestManage/<int:id>/<slug:status>/',
         views.coordinatorProjectRequestManage),
    # GUIDE
    path('guideDashboard/', views.guideDashboard),
    path('guideAssignmentList/<int:groupId>/', views.guideAssignmentList),
    path('guideAssignmentDetails/<int:groupId>/<int:pk>/',
         views.guideAssignmentDetails),
    path("guideAssignGrades/", views.guideAssignGrades),
    path("guideDetailsForm/", views.guideDetailsForm),
    path("guideProfile/", views.guideProfile),
    # STUDENT
    path('studentPersonal/', views.studentPersonal),
    # ASSISTANT
    # AUTHENTICATION
    path('whoAmI/', views.whoAmI),
    path('signIn/', views.signIn),
    path('signUp/', views.signUp),
    path('guideSignUp/', views.guideSignUp),
    path('signOut/', views.signOut),
    path('changePassword/', views.changePassword),
    path('changePhoto/', views.changePhoto),
    path('getImage/', views.getImage),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
