import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements AfterViewInit {
  // Données pour les classes
  classes = [
    {
      name: 'Info2B',
      avatars: ['../../assets/images/33.png'],
      extraAvatars: 2,
      presenceData: [40, 60],
      gradeData: [7.5],
      performanceData: [30, 65, 30],
    },
    {
      name: 'Info2C',
      avatars: ['../../assets/images/33.png'],
      extraAvatars: 3,
      presenceData: [85, 15],
      gradeData: [8],
      performanceData: [75, 80, 85],
    }
  ];

  ngAfterViewInit() {
    this.classes.forEach((classe) => {
      // Presence Chart
      new Chart(`presenceChart${classe.name}`, {
        type: 'bar',
        data: {
          labels: ['Présent', 'Absent'],
          datasets: [
            {
              label: 'Presence',
              data: classe.presenceData,
              backgroundColor: ['#4caf50', '#f44336'],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: true, position: 'top' },
          },
        },
      });

      // Grade Chart
      new Chart(`gradeChart${classe.name}`, {
        type: 'doughnut',
        data: {
          labels: ['Grade'],
          datasets: [
            {
              label: 'Grade',
              data: classe.gradeData,
              backgroundColor: ['#2196f3'],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: true, position: 'top' },
          },
        },
      });

      // Performance Chart
      new Chart(`performanceChart${classe.name}`, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March'],
          datasets: [
            {
              label: 'Performance',
              data: classe.performanceData,
              borderColor: '#ff9800',
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: true, position: 'top' },
          },
        },
      });
    });
  }
}
