from django.db import models

class Skill(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class JobModel(models.Model):
    company_logo = models.URLField(max_length=255)  # Change from FileField to URLField
    company_name = models.CharField(max_length=100)
    job_title = models.CharField(max_length=100)
    year_of_experience = models.IntegerField(
        choices=[(i, f'{i} years') for i in range(10, 16)],  # Limited to 10-15 years
    )
    joining_date = models.DateField()
    packages = models.IntegerField()
    number_of_positions = models.IntegerField()
    location = models.CharField(max_length=255)
    skills = models.ManyToManyField(Skill)  # Many-to-many relationship with the Skill model
    posted_by = models.IntegerField()  # Assuming this stores the user ID

    def __str__(self):
        return f"{self.job_title} at {self.company_name}"
